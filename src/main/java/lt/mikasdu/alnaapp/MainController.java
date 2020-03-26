package lt.mikasdu.alnaapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path = "/person")
public class MainController {
    @Autowired
    private PersonRepository personRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Person> getAllUsers() {
        return personRepository.findAll();
    }

    @GetMapping(path = "/find")
    public @ResponseBody
    Iterable<Person> findByBirthday(@RequestParam String search) {
        return personRepository.findPersonsByString(search);
    }


}
