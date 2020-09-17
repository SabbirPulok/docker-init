import random

from flask import Flask, render_template

app = Flask(__name__, template_folder='template')


@app.route('/')
def home():
    color = "blue"
    return render_template('hello.html', color=color)

if __name__ == '__main__':
    app.run(debug=True)