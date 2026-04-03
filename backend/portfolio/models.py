from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, help_text="Used for the URL, e.g., 'landio'")
    client = models.CharField(max_length=100, blank=True)
    services = models.CharField(max_length=200, blank=True)
    timeline = models.CharField(max_length=100, blank=True)
    
    description = models.TextField()
    
    cover_image = models.ImageField(upload_to='projects/')
    detail_image = models.ImageField(upload_to='projects/', blank=True, null=True)
    
    live_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    website = models.URLField(blank=True, null=True)
    budget = models.CharField(max_length=50, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"