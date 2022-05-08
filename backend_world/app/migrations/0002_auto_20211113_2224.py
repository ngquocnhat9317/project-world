# Generated by Django 3.2.9 on 2021-11-13 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Child',
                'db_table': 'child',
            },
        ),
        migrations.RemoveConstraint(
            model_name='houseowner',
            name='house owner',
        ),
        migrations.RemoveField(
            model_name='houseowner',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='houseowner',
            name='position',
        ),
        migrations.RemoveField(
            model_name='person',
            name='home',
        ),
        migrations.RemoveField(
            model_name='world',
            name='map',
        ),
        migrations.AddField(
            model_name='houseowner',
            name='husband',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='husband', to='app.person'),
        ),
        migrations.AddField(
            model_name='houseowner',
            name='wife',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='wife', to='app.person'),
        ),
        migrations.AddField(
            model_name='world',
            name='seed',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='home',
            name='local',
            field=models.CharField(default='000001-000001', max_length=13),
        ),
        migrations.AlterField(
            model_name='houseowner',
            name='house',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='app.home'),
        ),
        migrations.AlterField(
            model_name='person',
            name='date_of_birth',
            field=models.DateTimeField(default='01/01/0001'),
        ),
        migrations.AlterField(
            model_name='person',
            name='date_of_death',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='person',
            name='job',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='app.job'),
        ),
        migrations.AlterField(
            model_name='person',
            name='local',
            field=models.CharField(blank=True, default='000001-000001', max_length=13),
        ),
        migrations.AlterField(
            model_name='world',
            name='month',
            field=models.CharField(default=1, max_length=2),
        ),
        migrations.AlterField(
            model_name='world',
            name='year',
            field=models.CharField(default=0, max_length=4),
        ),
        migrations.AddConstraint(
            model_name='houseowner',
            constraint=models.UniqueConstraint(fields=('husband', 'wife'), name='family'),
        ),
        migrations.AddField(
            model_name='child',
            name='child',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='app.person'),
        ),
        migrations.AddField(
            model_name='child',
            name='house',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='app.houseowner'),
        ),
    ]