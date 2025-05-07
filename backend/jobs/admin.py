from django.contrib import admin
from .models import JobPost, ProfessionCategory, Profession, Company


admin.site.register(JobPost)
admin.site.register(ProfessionCategory)
admin.site.register(Profession)
admin.site.register(Company)



