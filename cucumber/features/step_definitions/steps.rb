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

def set_text_input(input_placeholder, text, config)
  matching_input = config.browser.text_field placeholder: input_placeholder
  matching_input.exists? && matching_input.set(text)
end

def set_selector(input_placeholder, option, config)
  matching_input = config.browser.select placeholder: input_placeholder
  matching_input.exists? && matching_input.select(option)
end

When("I fill in following:") do |table|
  # table is a Cucumber::MultilineArgument::DataTable
  for property in table.column_names do
    set_text_input(property, table.hashes[0][property], config)
    set_selector(property, table.hashes[0][property], config)
  end
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
