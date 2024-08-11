default:
	@echo venv
	@echo test
	@echo demo
	@echo garden
	@echo imprint
	@echo view


venv:
	@echo source /Users/paul/github/slexil2/py3105slexil/bin/activate

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

view:
	open garden.html
