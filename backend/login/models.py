from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser debe tener is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, verbose_name='Correo electrónico')
    first_name = models.CharField(max_length=150, blank=True, verbose_name='Nombre')
    last_name = models.CharField(max_length=150, blank=True, verbose_name='Apellido')
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    is_staff = models.BooleanField(default=False, verbose_name='Staff')
    date_joined = models.DateTimeField(default=timezone.now, verbose_name='Fecha de registro')

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    def __str__(self):
        return self.email

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'.strip()

    def get_short_name(self):
        return self.first_name


class Session(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sessions')
    token = models.CharField(max_length=255, unique=True, verbose_name='Token')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Creado')
    expires_at = models.DateTimeField(verbose_name='Expira')
    is_active = models.BooleanField(default=True, verbose_name='Activo')
    
    class Meta:
        verbose_name = 'Sesión'
        verbose_name_plural = 'Sesiones'
        ordering = ['-created_at']

    def __str__(self):
        return f'Session {self.user.email} - {self.created_at}'

    def is_valid(self):
        return self.is_active and self.expires_at > timezone.now()


class Speciality(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name='Nombre')
    description = models.TextField(blank=True, verbose_name='Descripción')
    
    class Meta:
        verbose_name = 'Especialidad'
        verbose_name_plural = 'Especialidades'
        ordering = ['name']

    def __str__(self):
        return self.name


class HealthInsurance(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Nombre')
    code = models.CharField(max_length=20, unique=True, blank=True, verbose_name='Código')
    phone = models.CharField(max_length=20, blank=True, verbose_name='Teléfono')
    email = models.EmailField(blank=True, verbose_name='Email')
    address = models.TextField(blank=True, verbose_name='Dirección')
    
    class Meta:
        verbose_name = 'Obra Social'
        verbose_name_plural = 'Obras Sociales'
        ordering = ['name']

    def __str__(self):
        return self.name


class Dentist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='dentist_profile')
    license_number = models.CharField(max_length=50, unique=True, verbose_name='Número de licencia')
    speciality = models.ForeignKey(Speciality, on_delete=models.SET_NULL, null=True, blank=True, related_name='dentists', verbose_name='Especialidad')
    phone = models.CharField(max_length=20, blank=True, verbose_name='Teléfono')
    address = models.TextField(blank=True, verbose_name='Dirección')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Creado')
    
    class Meta:
        verbose_name = 'Dentista'
        verbose_name_plural = 'Dentistas'
        ordering = ['user__last_name', 'user__first_name']

    def __str__(self):
        return f'Dr. {self.user.get_full_name()} - {self.license_number}'


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='patient_profile')
    document_number = models.CharField(max_length=20, unique=True, verbose_name='DNI/Documento')
    date_of_birth = models.DateField(null=True, blank=True, verbose_name='Fecha de nacimiento')
    phone = models.CharField(max_length=20, blank=True, verbose_name='Teléfono')
    address = models.TextField(blank=True, verbose_name='Dirección')
    health_insurance = models.ForeignKey(HealthInsurance, on_delete=models.SET_NULL, null=True, blank=True, related_name='patients', verbose_name='Obra Social')
    insurance_number = models.CharField(max_length=50, blank=True, verbose_name='Número de afiliado')
    emergency_contact = models.CharField(max_length=150, blank=True, verbose_name='Contacto de emergencia')
    emergency_phone = models.CharField(max_length=20, blank=True, verbose_name='Teléfono de emergencia')
    medical_notes = models.TextField(blank=True, verbose_name='Notas médicas')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Creado')
    
    class Meta:
        verbose_name = 'Paciente'
        verbose_name_plural = 'Pacientes'
        ordering = ['user__last_name', 'user__first_name']

    def __str__(self):
        return f'{self.user.get_full_name()}'
