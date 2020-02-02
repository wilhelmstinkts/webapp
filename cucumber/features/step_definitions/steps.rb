# frozen_string_literal: true

require 'watir'
browser_args = [
  'headless',
  'disable-gpu',
  'disable-dev-shm-usage',
  'disable-software-rasterizer',
  'no-sandbox'
]
browser = Watir::Browser.new :chrome, args: browser_args

When('I open the main page') do
  source_path = File.expand_path('../src', Dir.pwd)
  url = "file:///#{source_path}/index.html"
  browser.goto url
end

Then('I should see {string}') do |must_be_shown|
  content = browser.text
  expect(content).to include(must_be_shown)
end

Then('I should not see {string}') do |must_not_be_shown|
  content = browser.text
  expect(content).not_to include(must_not_be_shown)
end
