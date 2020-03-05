# frozen_string_literal: true

require 'watir'

# Holds global configuration values for the cucumber steps
class Config
  attr_reader :browser, :timeout

  def initialize(browser, timeout)
    @browser = browser
    @timeout = timeout
  end

  def self.default
    browser_args = %w[
      headless
      disable-gpu
      disable-dev-shm-usage
      disable-software-rasterizer
      no-sandbox
    ]
    browser = Watir::Browser.new :chrome, args: browser_args

    timeout = 5
    Config.new(browser, timeout)
  end
end
