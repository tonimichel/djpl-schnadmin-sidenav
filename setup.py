#! /usr/bin/env python
import os
from setuptools import setup, find_packages

def read(fname):
    try:
        return open(os.path.join(os.path.dirname(__file__), fname)).read()
    except IOError:
        return ''

setup(
    name='djpl-schnadmin-sidenav',
    version='0.1',
    description='A side nav for djpl-schnadmin',
    long_description=read('README.rst'),
    license='The MIT License',
    keywords='django, django-productline, admin theme, django admin, djpl-schnadmin, schnadmin',
    author='Toni Michel',
    author_email='toni@schnapptack.de',
    url="https://github.com/tonimichel/djpl-schnadmin-sidenav",
    packages=find_packages(),
    package_dir={'schnadmin_sidenav': 'schnadmin_sidenav'},
    include_package_data=True,
    scripts=[],
    zip_safe=False,
    classifiers=[
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent'
    ],
    install_requires=[
        'django-productline', 'djpl-schnadmin',
    ]
)
