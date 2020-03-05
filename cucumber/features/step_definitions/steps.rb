# frozen_string_literal: true

require 'watir'
require_relative 'config.rb'

config = Config.default
browser = config.browser

def visible?(text, config)
  browser = config.browser
  content = browser.text
  matching_input = browser.input placeholder: text  
  matching_input.exists? || content.include?(text) || false
end

def visible_within_timeout?(text, config)
  start_time = Process.clock_gettime(Process::CLOCK_MONOTONIC)
  elapsed_seconds = 0
  present = false
  while !present && elapsed_seconds < config.timeout
    present = visible?(text, config)
    current_time = Process.clock_gettime(Process::CLOCK_MONOTONIC)
    elapsed_seconds = current_time - start_time
  end
  present
end

When('I open the main page') do
  source_path = File.expand_path('../src', Dir.pwd)
  url = "file:///#{source_path}/index.html"
  browser.goto url
end

Then('I should see {string}') do |must_be_shown|
  expect(visible_within_timeout?(must_be_shown, config)).to be(true)
end

Then('I should not see {string}') do |must_not_be_shown|
  expect(visible_within_timeout?(must_not_be_shown, config)).to be(false)
end

Then('I click {string}') do |button_text|
  button = browser.button(text: button_text)
  button.click
end
