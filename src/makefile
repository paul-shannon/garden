default:
	@echo venv
	@echo server
	@echo test
	@echo oneNodeWithPosition
	@echo twoNodesWithPosition
	@echo demo
	@echo demos
	@echo demot   # just a single 1-node graph
	@echo demot2  # 2-node graph
	@echo dreams
	@echo garden
	@echo imprint
	@echo geertz
	@echo perspective
	@echo template
	@echo lushootseed
	@echo stardust
	@echo metaphor
	@echo tunes
	@echo backstories
	@echo philosophy
	@echo etcPoetics
	@echo ruyer
	@echo current

	@echo publish
	@echo publish-img
	@echo publish-audio
	@echo view
	@echo viewAlberta
	@echo viewPair


venv:
	@echo source /Users/paul/github/slexil2/py3105slexil/bin/activate

server:
	python -m http.server 8002

test:
	python test_yamlsToCyJSON.py

oneNodeWithPosition:
	python createGraphs.py One:single.yaml

twoNodesWithPosition:
	python createGraphs.py Two:double.yaml


demo:
	python createGraphs.py Demo:demo.yaml

demos:
	python createGraphs.py Demo:demo.yaml Geertz:geertz.yaml Perspective:perspective.yaml

demot:
	python createGraphs.py tiny:demoTiny.yaml

demot2:
	python createGraphs.py Tiny:demoTiny2.yaml

dreams:
	python createGraphs.py Dreams:dreams.yaml

descola:
	python createGraphs.py Descola:descola.yaml

template:
	python createGraphs.py Template:template.yaml

garden:
	python createGraph.py garden2.yaml
	m4 -P createGraph.js-pre > createGraph.js

imprint:
	python createGraphs.py Imprint:imprint.yaml \

geertz:
	python createGraphs.py Geertz:geertz.yaml

perspective:
	python createGraphs.py Perspective:perspective.yaml

philosophy:
	python createGraphs.py Philosophy:philosophy.yaml

lushootseed:
	python createGraphs.py Lushootseed:lushootseed.yaml

ruyer:
	python createGraphs.py Ruyer:ruyer.yaml

etcPoetics:
	python createGraphs.py \
       ETCPoetics:etcPoetics.yaml \

home:
	python createGraphs.py Home:home.yaml

misc:
	python createGraphs.py misc:misc.yaml

current:
	python createGraphs.py \
       misc:misc.yaml \
       Home:home.yaml \
       ETCPoetics:etcPoetics.yaml \
       Backstories:backstories.yaml \
       Ruyer:ruyer.yaml \
       Stardust:stardust.yaml \
       Imprint:imprint.yaml \
       Geertz:geertz.yaml \
       Descola:descola.yaml \
       Perspective:perspective.yaml \
       Philosophy:philosophy.yaml \
       Lushootseed:lushootseed.yaml \
       Metaphor:metaphor.yaml \
       Tunes:tunes.yaml

2:
	python createGraphs.py \
       Stardust:stardust.yaml \
       Imprint:imprint.yaml


stardust:
	python createGraphs.py \
       Stardust:stardust.yaml

metaphor:
	python createGraphs.py \
       Metaphor:metaphor.yaml

tunes:
	python createGraphs.py \
       Tunes:tunes.yaml

backstories:
	python createGraphs.py \
       Backstories:backstories.yaml

view:
	open http://localhost:8002/garden.html



DEST=pshannon@206.12.95.4:www/misc/garden
DEST=paulshannnon@pshannon.net:public_html/pshannon.net/garden

publish:
	scp garden.html $(DEST)/index.html
	scp layouts.js $(DEST)/
	scp garden.js $(DEST)/
	scp kb.js $(DEST)/
	scp garden-graphs.js $(DEST)/

publish-img:
	scp img/* $(DEST)/img/

publish-audio:
	scp audio/* $(DEST)/audio/

viewAlberta:
	open https://slexildata.artsrn.ualberta.ca/misc/garden

viewPair:
	open https://pshannon.net/garden/
