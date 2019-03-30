const {
  processData,
  setQueue,
  setPort,
  addToQueue,
  showHelp
} = require('./communication')

test('setQueue should be defined', () => {
  expect(setQueue).toBeDefined()
})

test('setPort should be defined', () => {
  expect(setPort).toBeDefined()
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

test('showHelp should be defined', () => {
  expect(showHelp).toBeDefined()
})
