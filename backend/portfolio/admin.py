from django.contrib import admin
from .models import Project, Contact

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'client', 'created_at')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'budget', 'created_at')