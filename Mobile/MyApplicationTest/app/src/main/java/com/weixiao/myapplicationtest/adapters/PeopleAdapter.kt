package com.weixiao.myapplicationtest.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.firebase.ui.database.FirebaseRecyclerAdapter
import com.firebase.ui.database.FirebaseRecyclerOptions
import com.weixiao.myapplicationtest.R
import com.weixiao.week1class.entity.People


/**
 *
 * People adapter
 */

class PeopleAdapter(private val option: FirebaseRecyclerOptions<People>) :
    FirebaseRecyclerAdapter<People, PeopleAdapter.PeopleViewHolder>(option) {

    //TODO I can run the code when I comment the peopleList. It is not working if I comment out the people list.
    // I try to resolute that, but I didn't find the way to fix it.
    // So now, I just can display the first element of firebase people list data.

// declare a list for storing the data list.
    private val peopleList:MutableList<People> = mutableListOf();
    init {
        //Init the data list
        peopleList.addAll(option.snapshots);
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PeopleViewHolder {
        val view =
            LayoutInflater.from(parent.context).inflate(R.layout.row_layout, parent, false);
        return PeopleViewHolder(view);
    }

    /**
     * Must override this method from the super class.
     * Using this method to bind data via calling the method of PeopleViewHolder.
     */
    override fun onBindViewHolder(holder: PeopleViewHolder, position: Int, model: People) {
        println("----------"+model.toString());
//        val peopleModel = getItem(position);
        holder.bind(model);
    }

    /**
     * Define an inner class to display data on recycle view.
     */
    inner class PeopleViewHolder(itemView: View) :
        RecyclerView.ViewHolder(itemView) {
        //Bind data to row display.
        fun bind(model: People) {
            val textNameView = itemView.findViewById<TextView>(R.id.textName);
            val textRoleView = itemView.findViewById<TextView>(R.id.textRole);
            val imagePhoto = itemView.findViewById<ImageView>(R.id.imgPhoto);
            textNameView.text = model.name;
            textRoleView.text = model.role;
            //Load image into imagePhoto
            Glide.with(itemView.context)
                .load(model.photo)
                .into(imagePhoto)
        }
    }

    override fun getItemCount(): Int {
        return option.snapshots.size;
    }

}