package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
	features = "src/test/java/features",
	glue = {"StepDefinition","util"},
	plugin = {"pretty","junit:targets/reports/jreport.xml"},
	monochrome = true
	)


public class testrunner {

}
