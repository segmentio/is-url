
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

test: build
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui bdd \
		--require should

.PHONY: clean test
