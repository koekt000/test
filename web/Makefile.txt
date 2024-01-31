all: build run

build: js python

python:
	pip install -r requirements.txt

js:
	npm install

run:
	uvicorn src.main:app --reload

clean:
	rm -rf node_modules
