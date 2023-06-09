package com.weixiao.myapplicationtest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.firebase.ui.database.FirebaseRecyclerOptions
import com.google.firebase.FirebaseApp
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.weixiao.myapplicationtest.adapters.PeopleAdapter
import com.weixiao.myapplicationtest.adapters.RecycleViewItemDecoration
import com.weixiao.week1class.entity.People

/**
 * This is main page.
 */
class MainActivity : AppCompatActivity() {
    private var adapter: PeopleAdapter? = null;
    private var dbref: DatabaseReference? = null;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main);

        val email = "your.xiaowei@gmail.com"
        val password = "111111"

        dbref = FirebaseDatabase.getInstance().getReference("people")

        FirebaseAuth.getInstance().createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    Toast.makeText(this, "Registration successful", Toast.LENGTH_LONG).show()
                } else {
                    val exception = task.exception
                    Toast.makeText(this, "Authentication failed: ${exception?.message}", Toast.LENGTH_LONG).show()
                }
            }

        FirebaseApp.initializeApp(this);
        //Get instance and its child
        val query = FirebaseDatabase.getInstance().reference.child("people");
        println("----query-----"+query)
        //Get the Firebase recycle option instance
        val option = FirebaseRecyclerOptions.Builder<People>().setQuery(query,People::class.java).build();
        println("----option-----"+option.getSnapshots())
        //Pass the Firebase recycle option instance to PeopleAdaptor constructor than get the instance of adapter.
        adapter = PeopleAdapter(option);

        val rView : RecyclerView = findViewById(R.id.rView);
        var  itemDecoration   =  RecycleViewItemDecoration(1);
        rView.addItemDecoration(itemDecoration)
        rView.layoutManager = LinearLayoutManager(this);
        rView.adapter = adapter;
    }

    override fun onStart() {
        super.onStart()
        // Call
        adapter?.startListening();
    }
}