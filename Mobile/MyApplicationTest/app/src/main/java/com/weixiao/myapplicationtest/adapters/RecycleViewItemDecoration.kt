package com.weixiao.myapplicationtest.adapters

import android.graphics.Rect
import android.view.View
import androidx.recyclerview.widget.RecyclerView

/*
Setting the margin of ever one element of recycleView
 */
class RecycleViewItemDecoration: RecyclerView.ItemDecoration {
private var space: Int = 0;

constructor(space: Int){
    this.space = space;
}

    override fun getItemOffsets(
        outRect: Rect,
        view: View,
        parent: RecyclerView,
        state: RecyclerView.State
    ) {
        outRect.left = space;
        outRect.right = space;

        outRect.bottom = space;
        if(parent.getChildAdapterPosition(view) == 0){
            outRect.top = space;
        }
//        super.getItemOffsets(outRect, view, parent, state)
    }

}