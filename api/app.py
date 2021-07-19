import os
from flask import Flask, flash, request, redirect, url_for, session, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = 'C:/Users/USER/Image Input/app-copy/api/static'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/api/upload', methods=['POST'])
def handle_form():

    target=os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")

    files = request.files
    file = files.get('file')

    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)

    #session['uploadFilePath']=destination
    
    return jsonify({
        'success': True,
        'file': 'Received'
    })

if(__name__) == '__main__':
    app.config['SECRET_KEY'] = 'The random string'
    app.config['SESSION_TYPE'] = 'filesystem'

    app.debug = True

    app.run(5000)