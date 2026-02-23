import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Product = {
    id : Nat;
    name : Text;
    price : Nat;
    description : Text;
  };

  let products = Map.fromIter<Nat, Product>([
    (1, {
      id = 1;
      name = "Heavyweight Tee";
      price = 45;
      description = "Premium heavyweight t-shirt";
    }),
    (2, {
      id = 2;
      name = "Linen Trousers";
      price = 120;
      description = "Comfortable linen trousers";
    }),
    (3, {
      id = 3;
      name = "Canvas Tote";
      price = 35;
      description = "Durable canvas tote bag";
    }),
    (4, {
      id = 4;
      name = "Studio Cap";
      price = 25;
      description = "Stylish studio cap";
    }),
    (5, {
      id = 5;
      name = "Cashmere Sweater";
      price = 160;
      description = "Soft premium cashmere sweater in light beige";
    }),
    (6, {
      id = 6;
      name = "Minimalist Blazer";
      price = 210;
      description = "Classic black blazer with structured tailoring";
    }),
    (7, {
      id = 7;
      name = "Leather Chelsea Boots";
      price = 195;
      description = "Smooth black leather boots with elastic sides";
    }),
    (8, {
      id = 8;
      name = "Silk Blend Scarf";
      price = 60;
      description = "Lightweight scarf in grey silk blend";
    }),
  ].values());

  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray();
  };

  type CartItem = {
    productId : Nat;
    quantity : Nat;
  };

  let carts = Map.empty<Principal, [CartItem]>();

  public query ({ caller }) func getCart() : async [CartItem] {
    switch (carts.get(caller)) {
      case (?cart) { cart };
      case (null) { [] };
    };
  };

  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    if (quantity == 0) { Runtime.trap("Invalid quantity. Must be greater than 0") };

    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product with id " # productId.toText() # " does not exist") };
      case (?_) {};
    };

    let newItem = { productId; quantity };

    switch (carts.get(caller)) {
      case (null) {
        carts.add(caller, [newItem]);
      };
      case (?cart) {
        let updatedCart = cart.concat([newItem]);
        carts.add(caller, updatedCart);
      };
    };
  };
};
