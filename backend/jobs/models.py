from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class JobPost(models.Model):
    title = models.CharField(max_length=256, default="None")
    description = models.TextField(max_length=256, default="None")
    profession_category = models.ManyToManyField("ProfessionCategory", related_name="job_posts")
    profession = models.ForeignKey("Profession", on_delete=models.DO_NOTHING, related_name="job_posts")
    applicants = models.ManyToManyField(User, through="UserJobPostApplication")
    expired = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self):
        return self.title
    

class UserJobPostApplication(models.Model):
    jobpost = models.ForeignKey(JobPost, related_name="user_applicants", on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name="applications", on_delete=models.CASCADE)
    date_of_application =  models.DateTimeField(auto_now_add=True)


class ProfessionCategory(models.Model):
    title = models.CharField(max_length=256, default="None")

    def __str__(self):
        return self.title
    


class Profession(models.Model):
    title = models.CharField(max_length=256, default="None")

    def __str__(self):
        return self.title
    

class Company(models.Model):
    title = models.CharField(max_length=256, default="None")
    description = models.TextField(null=True, blank=True, default="None")


