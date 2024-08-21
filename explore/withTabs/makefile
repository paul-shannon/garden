default:
	@echo venv
	@echo server
	@echo test
	@echo tests   # all yamls go into one json structure and one file
	@echo demo
	@echo demos
	@echo demot   # just a single 1-node graph
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

tests:
	python test_yamlsToCyJSON.py

demo:
	python createGraph.py demo.yaml
	m4 -P createGraph.js-pre > createGraph.js

demos:
	python createGraphs.py Demo:demo.yaml Geertz:geertz.yaml Perspective:perspective.yaml

demot:
	python createGraphs.py tiny:demoTiny.yaml

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

