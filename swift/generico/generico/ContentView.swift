//
//  ContentView.swift
//  generico
//
//  Created by Fernando on 13-03-20.
//  Copyright © 2020 copycat. All rights reserved.
//

import SwiftUI

struct ContentView: View {
	var usuario = "user"
    var body: some View {
		VStack(alignment: .center, spacing: 20) {
			VStack {
				TextField("user@poke.com", text: /*@START_MENU_TOKEN@*//*@PLACEHOLDER=Value@*/.constant("")/*@END_MENU_TOKEN@*/)
					.multilineTextAlignment(.center)
				
				SecureField(/*@START_MENU_TOKEN@*/ /*@PLACEHOLDER=Label@*/"Password"/*@END_MENU_TOKEN@*/, text: /*@START_MENU_TOKEN@*/ /*@PLACEHOLDER=Value@*/.constant("Apple")/*@END_MENU_TOKEN@*/)
					.multilineTextAlignment(.center)
				Button(action: {
					print("pokelogin")
				}) {
					Text("Ingresar")
				}
			}
		}
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
