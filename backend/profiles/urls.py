from .views import * 
from django.urls import path

urlpatterns = [
    path("profils", ProfilListView.as_view(), name="profils_list"),
    path("profils/<int:pk>", ProfilDetailView.as_view(), name="profil_detail"),
    path("education", EducationListView.as_view(), name="education_list"),
    path("education/<int:id>", EducationDetailView.as_view(), name="education_detail"),
    path("work_experience", WorkExperienceListView.as_view(), name="work_experience_list"),
    path("work_experience/<int:id>", WorkExperienceDetailView.as_view(), name="work_experience_detail"),
    path("skills", SkillListView.as_view(), name="skill_list"),
    path("skills/<int:id>", SkillDetailView.as_view(), name="skill_detail"),
    path("languages", LanguageListView.as_view(), name="language_list"),
    path("lnguages/<int:id>", LanguageDetailView.as_view(), name="language_detail"),
    path("skills/user", UserSkillListView.as_view(), name="user_skills"),
    path("skills/user/<int:id>", UserSkillDetailView.as_view(), name="user_skills_detail"),
    path("languages/user", UserLanguageListView.as_view(), name="user_languages"),
    path("languages/user/<int:id>", UserLanguageDetailView.as_view(), name="user_languages_detail"),
]