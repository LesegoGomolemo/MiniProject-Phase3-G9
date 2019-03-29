const { processData, setQueue, addToQueue } = require('./communication')

test('setQueue should be defined', () => {
  expect(setQueue).toBeDefined()
})

/* test('setQueue given queue parameter', () => {
  expect(setQueue("something")).toBe()
}) */

test('processData should be defined', () => {
  expect(processData).toBeDefined()
})

test('addToQueue should be defined', () => {
  expect(addToQueue).toBeDefined()
})
