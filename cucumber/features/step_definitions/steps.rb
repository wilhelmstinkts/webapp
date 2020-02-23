# frozen_string_literal: true

require 'watir'
browser_args = %w[
  headless
  disable-gpu
  disable-dev-shm-usage
  disable-software-rasterizer
  no-sandbox
]
browser = Watir::Browser.new :chrome, args: browser_args

def isVisible(text, browser)
  found = false
  content = browser.text  
  matching_input = browser.input placeholder: text
  if matching_input.exists? or content.include?(text)
    found = true
  end  
  return found
end

When('I open the main page') do
  source_path = File.expand_path('../src', Dir.pwd)
  url = "file:///#{source_path}/index.html"
  browser.goto url
end

Then('I should see {string}') do |must_be_shown|
  expect(isVisible(must_be_shown, browser)).to be(true)
end

Then('I should not see {string}') do |must_not_be_shown|
  expect(isVisible(must_not_be_shown, browser)).to be(false)
end

Then("I click {string}") do |button_text|
  button = browser.button(text: button_text)
  button.click
end
