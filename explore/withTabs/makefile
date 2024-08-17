default:
	@echo venv
	@echo server
	@echo test
	@echo demo
	@echo garden
	@echo imprint
	@echo geertz
	@echo perspective
	@echo daylight
	@echo view


venv:
	@echo source /Users/paul/github/slexil2/py3105slexil/bin/activate

server:
	python -m http.server 8002

test:
	python test_yamlToCyJSON.py

demo:
	python createGraph.py demo.yaml
	m4 -P createGraph.js-pre > createGraph.js

garden:
	python createGraph.py garden2.yaml
	m4 -P createGraph.js-pre > createGraph.js

imprint:
	python createGraph.py imprint.yaml
	m4 -P createGraph.js-pre > createGraph.js

geertz:
	python createGraph.py geertz.yaml
	m4 -P createGraph.js-pre > createGraph.js

perspective:
	python createGraph.py perspective.yaml
	m4 -P createGraph.js-pre > createGraph.js

daylight:
	python createGraph.py daylight.yaml
	m4 -P createGraph.js-pre > createGraph.js

view:
	open http://localhost:8002/garden.html

