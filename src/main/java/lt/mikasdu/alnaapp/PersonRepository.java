package lt.mikasdu.alnaapp;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person, Integer> {

    @Query(value = "SELECT * FROM person WHERE name LIKE %?1% OR birthday like %?1%", nativeQuery = true)
    List<Person> findPersonsByString(String search);
}
