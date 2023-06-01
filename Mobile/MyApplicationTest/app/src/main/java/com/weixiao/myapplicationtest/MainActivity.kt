package com.weixiao.myapplicationtest

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.firebase.ui.database.FirebaseRecyclerOptions
import com.google.firebase.database.FirebaseDatabase
import com.weixiao.myapplicationtest.adapters.PeopleAdapter
import com.weixiao.week1class.entity.People

/**
 * This is main page.
 */
class MainActivity : AppCompatActivity() {
    private var adapter: PeopleAdapter? = null;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main);
        //Get instance and its child
        val query = FirebaseDatabase.getInstance().reference.child("people");
        //Get the Firebase recycle option instance
        val option = FirebaseRecyclerOptions.Builder<People>().setQuery(query,People::class.java).build();
        //Pass the Firebase recycle option instance to PeopleAdaptor constructor than get the instance of adapter.
        adapter = PeopleAdapter(option);

        val rView : RecyclerView = findViewById(R.id.rView);
        rView.layoutManager = LinearLayoutManager(this);
        rView.adapter = adapter;
    }

    override fun onStart() {
        super.onStart()
        // Call
        adapter?.startListening();
    }
}