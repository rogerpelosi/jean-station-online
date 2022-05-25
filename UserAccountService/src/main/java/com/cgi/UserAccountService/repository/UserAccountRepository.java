package com.cgi.UserAccountService.repository;

import com.cgi.UserAccountService.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface UserAccountRepository extends JpaRepository<UserAccount, Integer> {

	Optional<UserAccount> findByUsernameAndPassword(String username, String password);
}
