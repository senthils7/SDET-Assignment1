package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.hooks;

public class stepdefinition {
	WebDriver driver = hooks.driver;

	@Given("^user should be on the home page$")
	public void user_should_be_on_the_home_page() throws Throwable {
		driver.get("http://elearningm1.upskills.in/");
		driver.manage().window().maximize();


	}

	@When("^user clicks on Sign up button$")
	public void user_clicks_on_Sign_up_button() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.linkText("Sign up!")).click();

	}
	
	
	@When("^user enters the necessary information \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_enters_the_necessary_information(String Firstname, String Lastname, String email, String username, String pass, String confirmpass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(Firstname);

		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(Lastname);

		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(email);

		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);

		driver.findElement(By.xpath("//input[@name='pass1']")).sendKeys(pass);

		driver.findElement(By.xpath("//input[@name='pass2']")).sendKeys(confirmpass);

	}

	@When("^user clicks on Register button$")
	public void user_clicks_on_Register_button() throws Throwable {
		driver.findElement(By.xpath("//button[@name='submit']")).click();
		Thread.sleep(3000);

	}


	@Then("^confirmation message is displayed in the screen$")
	public void confirmation_message_is_displayed_in_the_screen() throws Throwable {

		String pageSource = driver.getPageSource();
		boolean isTheNamePresent = pageSource.contains("abc xyz");
		Assert.assertTrue(isTheNamePresent);
		System.out.println("User name is matching with the entered username");
		
	}

	@Then("^user clicks on profile button in the top right corner$")
	public void user_clicks_on_profile_button_in_the_top_right_corner() throws Throwable {
		driver.findElement(By.xpath("//span[@class='caret']")).click();

	}

	@Then("^user email is verified in the screen$")
	public void user_email_is_verified_in_the_screen() throws Throwable {
		String pageSource = driver.getPageSource();
		boolean isemailPresent = pageSource.contains("a@a.com");
		Assert.assertTrue(isemailPresent);
	}

	@Then("^user clicks on the Inbox button$")
	public void user_clicks_on_the_Inbox_button() throws Throwable {
		driver.findElement(By.xpath("//a[@title='Inbox']")).click();
	}

	@Then("^user is naviagated to the new Send Message screen$")
	public void user_is_naviagated_to_the_new_Send_Message_screen() throws Throwable {
		driver.findElement(By.xpath("//img[@title='Compose message']")).click();
	}


@Then("^user enteres \"([^\"]*)\",\"([^\"]*)\"$")
public void user_enteres(String recepient, String subject) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
 
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys(recepient);
		
		Thread.sleep(4000);
		
		driver.findElement(By.xpath("//li[@class='select2-results__option select2-results__option--highlighted']")).click();

		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(subject);

	}

	@When("^user clicks on Send Message$")
	public void user_clicks_on_Send_Message() throws Throwable {
		driver.findElement(By.xpath("//button[@name='compose']")).click();
	}

	@Then("^Acknowledgment message is sent to \"([^\"]*)\"$")
	public void acknowledgment_message_is_sent_to(String recepientname) throws Throwable {
		
		String name = driver.findElement(By.xpath("//div[@class='alert alert-success']//b")).getText();
    	if(recepientname.equalsIgnoreCase(name))
          	System.out.println("The expected name is same as actual name --- "+name);
    	else
          	System.out.println("The expected name doesn't match the actual name --- "+name);
	}
	

	
}
