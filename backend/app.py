from flask import Flask 

app = Flask(__name__)

@app.route("/")
def homepage():
    return "This is the homepage"

@app.route("/projects")
def projects():
    return "This is the projects page"

@app.route("/about")
def about():
    return "This is the about page"

if __name__ == "__main__":
    app.run(debug=True)

