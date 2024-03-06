from django.contrib import admin
from . models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'date', 'done')
    search_fields = ('id', 'title', 'description')
    list_editable = ('done',)
    list_filter = ('done',)


admin.site.register(Todo, TodoAdmin)
