# frozen_string_literal: true

require 'watir'

class Config
    def initialize(browser, timeout)
        @browser = browser
        @timeout = timeout
    end

    def browser
        @browser
    end

    def timeout
        @timeout
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
