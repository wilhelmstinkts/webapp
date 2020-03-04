# frozen_string_literal: true

require 'watir'
require_relative 'config.rb'

config = Config.default
browser = config.browser

def visible?(text, config)
  browser = config.browser
  start_time = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  elapsed_seconds = 0
  present = false
  while !present && elapsed_seconds < config.timeout
    content = browser.text
    matching_input = browser.input placeholder: text
    present = matching_input.exists? || content.include?(text) || false
    current_time = Process.clock_gettime(Process::CLOCK_MONOTONIC)
    elapsed_seconds = current_time - start_time
  end
  return present
end

When('I open the main page') do
  source_path = File.expand_path('../src', Dir.pwd)
  url = "file:///#{source_path}/index.html"
  browser.goto url
end

Then('I should see {string}') do |must_be_shown|
  expect(visible?(must_be_shown, config)).to be(true)
end

Then('I should not see {string}') do |must_not_be_shown|
  expect(visible?(must_not_be_shown, config)).to be(false)
end

Then('I click {string}') do |button_text|
  button = browser.button(text: button_text)
  button.click
end
