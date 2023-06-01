package com.weixiao.myapplicationtest.adapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.firebase.ui.database.FirebaseRecyclerAdapter
import com.firebase.ui.database.FirebaseRecyclerOptions
import com.weixiao.myapplicationtest.R
import com.weixiao.week1class.entity.People


/**
 * This is Adapter of People class.
 * But it is empty now.
 */

class PeopleAdapter(option: FirebaseRecyclerOptions<People>) :
    FirebaseRecyclerAdapter<People, PeopleAdapter.MyViewHolder>(option) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        return MyViewHolder(inflater, parent);
    }

    /**
     * Must override this method from the super class
     */
    override fun onBindViewHolder(holder: MyViewHolder, position: Int, model: People) {

    }

    class MyViewHolder(inflater: LayoutInflater, parent: ViewGroup) :
        RecyclerView.ViewHolder(inflater.inflate(R.layout.row_layout, parent, false)) {

    }

}