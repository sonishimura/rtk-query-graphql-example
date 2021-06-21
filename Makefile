start-mock:
	npx nodemon \
	--watch 'schema/*.graphql' \
	--watch 'mock.ts' \
	--exec 'ts-node' \
	mock.ts
