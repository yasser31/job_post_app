from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Profil(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ForeignKey(User, related_name="profil", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)



class Education(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ForeignKey(User, related_name="education", on_delete=models.CASCADE)


class WorkExperience(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ForeignKey(User, related_name="work_experience", on_delete=models.CASCADE)


class Skill(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ManyToManyField(User,through="UserSkill")
    

class UserSkill(models.Model):
    years_of_experience = models.IntegerField(blank=True, null=True, default=0)
    user = models.ForeignKey(User, related_name="skills", on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, related_name="User", on_delete=models.CASCADE)

class Language(models.Model):
    title = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ManyToManyField(User, related_name="languages", through="UserLanguage")


class UserLanguage(models.Model):
    proficiency = models.CharField(max_length=256, null=True, blank=True, default="None")
    user = models.ForeignKey(User, related_name="speaks", on_delete=models.CASCADE)
    language = models.ForeignKey(Language, related_name="speaker", on_delete=models.CASCADE)