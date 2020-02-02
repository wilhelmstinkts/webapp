require 'watir'
browser = Watir::Browser.new :chrome

When("I open the main page") do
  source_path = File.expand_path("../src", Dir.pwd)
  url = "file:///#{source_path}/index.html"
  puts url
  browser.goto url
end

Then("I should see {string}") do |must_be_shown|
  content = browser.text
  expect(content).to include(must_be_shown)
end

Then("I should not see {string}") do |must_not_be_shown|
  content = browser.text
  expect(content).not_to include(must_not_be_shown)
end
