
class Node {
    Node next;
    int val;

    Node(int val) {
        this.val = val;
        next = null;
    }



//below function is used to insert nodes in the linked list
public static Node insert(Node head, int val) {
        if(head == null) {
            return new Node(val);
        } else {
            Node cur;
            cur = insert(head.next, val);
            head.next = cur;
            return head;
        }
    }


public static Node Merge (Node head1, Node head2){
//Enter your code here
    if(head1 == null){
        return head2;
    }
    else if(head2 == null){
        return head1;
    }
    int curVal;
    if(head1.val <= head2.val){
        curVal = head1.val;
        head1 = head1.next;
    }
    else{
        curVal = head2.val;
        head2 = head2.next;
    }
    Node start=new Node(curVal);

    Node cur = start;
    while(head1 != null && head2 !=null){
        if(head1.val <= head2.val){
            insert(cur,head1.val);
            head1 = head1.next;
        }
        else{
            insert(cur,head2.val);
            head2 = head2.next;

        }
        cur= cur.next;
    }
    cur.next = (head1 == null) ? head2 : head1;
    return start;
}
}