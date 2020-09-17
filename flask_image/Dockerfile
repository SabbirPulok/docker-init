FROM ubuntu

RUN apt-get update && apt-get -y install python3 && apt-get -y install python3-pip

RUN pip3 install flask
RUN pip3 install flask-mysql

COPY . /opt/source_code

ENTRYPOINT FLASK_APP=/opt/source_code/app.py flask run