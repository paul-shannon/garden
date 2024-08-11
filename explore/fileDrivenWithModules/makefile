default:
	@echo venv
	@echo test
	@echo createDemo
	@echo createGarden
	@echo view


venv:
	@echo source /Users/paul/github/slexil2/py3105slexil/bin/activate

test:
	python test_yamlToCyJSON.py

createDemo:
	python createGraph.py demo.yaml
	m4 -P createGraph.js-pre > createGraph.js

createGarden:
	python createGraph.py garden.yaml
	m4 -P createGraph.js-pre > createGraph.js

view:
	open garden.html
