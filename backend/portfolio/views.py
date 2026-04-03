from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import EmailMessage 
from django.conf import settings
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        data = serializer.validated_data
        
        subject = f"New Portfolio Inquiry from {data['name']}"
        message = f"""
        Name: {data['name']}
        Email: {data['email']}
        Website: {data.get('website', 'N/A')}
        Budget: {data.get('budget', 'N/A')}
        
        Message:
        {data['message']}
        """
        
        try:
            email = EmailMessage(
                subject=subject,
                body=message,
                from_email=settings.EMAIL_HOST_USER, 
                to=["alexgrate606@gmail.com"],   
                reply_to=[data['email']],               
            )
            email.send(fail_silently=False)
            print("Email successfully handed off to Gmail!")
            
        except Exception as e:
            print(f"Error sending email: {e}")

        return Response({"message": "Message sent successfully!"}, status=status.HTTP_201_CREATED)