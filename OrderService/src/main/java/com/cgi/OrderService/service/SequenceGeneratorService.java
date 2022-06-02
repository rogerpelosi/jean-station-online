package com.cgi.OrderService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;

import com.cgi.OrderService.models.DatabaseSequence;

public class SequenceGeneratorService {
	
	@Autowired
	private MongoOperations mongoOps;
	
//	public long generateSequence(String seqName) {
//		DatabaseSequence counter = mongoOps.findAndModify(query(where("_id").is(seqName)), null, null);
//	}

}
