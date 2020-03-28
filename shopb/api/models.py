from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self):
        return '{}'.format(self.name)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'id': self.id,
            # 'id': self.id,
            # 'id': self.id,
        }
class Product(models.Model):
    name = models.CharField(max_length=15)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT, default=None, blank=True, null=True)

    def __str__(self):
        return '{}'.format(self.name)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count,
        }
