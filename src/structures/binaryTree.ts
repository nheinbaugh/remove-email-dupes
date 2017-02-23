/**
 * Created by nickh on 2/22/2017.
 */
import {Node} from './node';

// essentially a holder class to abstract away the idea of the "top" node in the tree`
export class BinaryTree {
  public RootNode: Node = null;

  public search(input: string): boolean {
    if (this.RootNode == null) {
      // edge case - we haven't added anything yet
      return false;
    }
    return this.RootNode.search(input);
  }

  public append(input: string): void {
    if (this.RootNode == null) {
      this.RootNode = new Node(input);
    }
    this.RootNode.append(input);
  }
}
