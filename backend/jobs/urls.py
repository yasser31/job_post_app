from django.urls import path
from .views import *

urlpatterns = [
    path("jobposts", JobPostListingView.as_view(), name="job_posts"),
    path("jobposts/<int:id>", JobPostDetailView.as_view(), name="job_post_detail"),
    path("categories", ProfessionCategoryListingView.as_view(), name="profession_categories"),
    path("professions", ProfessionListingView.as_view(), name="professions")
]