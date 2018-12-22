require 'test_helper'

class RootControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get root_new_url
    assert_response :success
  end

  test "should get create" do
    get root_create_url
    assert_response :success
  end

end
