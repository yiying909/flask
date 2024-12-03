from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


def get_outfit_api():
    # get wheater (location)
    # get_outfit (temperture)
    return None


if __name__ == '__main__':
    app.run(debug=True)

